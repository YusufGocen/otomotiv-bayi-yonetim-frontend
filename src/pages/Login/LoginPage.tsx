import Logo from '../../assets/Logo.png'
import { FaUser, FaLock ,FaEye, FaEyeSlash} from "react-icons/fa";
import { useState } from 'react';
import Button from '../../components/Ui/Button';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import type { LoginRequest } from '../../types/auth';
import { authenticate } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  const navigate=useNavigate();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginRequest>({
      defaultValues: {
        username: "",
        password: "",
      },
      mode: "onSubmit",
      reValidateMode: "onChange",
  });

  const onSubmit = async(data: LoginRequest) => {
    try {
      const response=await authenticate(data);

      localStorage.setItem("accessToken",response.payload.accessToken);
      localStorage.setItem("refreshToken",response.payload.refreshToken);

      navigate("/dashboard")

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen- bg-background flex items-center justify-center p-5">
      <div className="w-full max-w-lg rounded-3xl border border-border bg-surface p-6 shadow-2xl">

        <div className="flex flex-col items-center text-center">
          <img src={Logo} alt="logo" className="mx-auto mb-6 h-40 w-40 transition duration-300 hover:scale-105" />
          <h1 className="text-4xl font-bold text-text">Hoş Geldiniz</h1>
          <p className='mt-2 text-secondary'>Hesabınıza giriş yaparak devam edin.</p>
        </div>
        
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='relative'>
              <Input label='Kullanıcı Adı' placeholder='Kullanıcı Adınızı Giriniz' leftIcon={<FaUser/>}
                {...register("username", {
                  required: "Kullanıcı adı zorunludur.",
                })}
                error={errors.username?.message}
              />
            </div>
          </div>
          
          <div>
            <div className='relative'>
              <Input
              label="Şifre"
              type={showPassword ? "text" : "password"}
              placeholder="Şifrenizi giriniz"
              leftIcon={<FaLock />}
              rightIcon={
                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-primary hover:text-primary-dark">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>}
                    {...register("password", {
                      required: "Şifre zorunludur.",
                      minLength: {
                        value: 6,
                        message: "Şifre en az 6 karakter olmalıdır.",
                      },
                    })}
                    error={errors.password?.message}

              />
            </div>
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <label className='flex items-center gap-2 text-sm text-secondary cursor-pointer'>
              <input type="checkbox" className='h-4 w-4 rounded border-border text-primary focus:ring-primary' />
              Beni Hatırla
            </label>
            <button
            type='button' className='text-sm font-medium text-primary hover:text-primary-dark transition cursor-pointer'
            >
            Şifremi Unuttum
            </button>
          </div>
          <Button type='submit'>
            Giriş Yap
          </Button>

        </form>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <p className="text-center text-sm text-secondary">
              © 2026 Otomotiv Bayi Yönetim Sistemi
            </p>
          </div>
      </div>
    </div>
  )
}
