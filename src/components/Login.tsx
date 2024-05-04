"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function Login() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data);
        try {
            const signInData = await signIn('credentials', {
                identifiant: data.identifiant,
                password: data.password,
                redirect: false
            });
            if (signInData?.error) {
                alert(signInData?.error);
                return;
            }
            else {
                console.log(signInData)
                router.push('/admin/dashboard')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className='w-[80%]' onSubmit={handleSubmit(onSubmit)} >
                <div className='w-full text-center text-green-900 font-bold text-xl my-5'>Se connecter</div>
                <div className='h-16'>
                </div>

                <div className='w-full text-center text-slate-500 '>
                    <label htmlFor="" className='w-full'>Entrez votre email ou username</label>
                </div>
                <div className='w-full'>
                    <input
                        type="text"
                        placeholder=''
                        className={`bg-[#fdfdfde3] w-full border-2 border-slate-400 rounded-lg h-10 px-4  ${errors.identifiant && ' border-red-600'} `}
                        {...register("identifiant", { required: true })}
                    />
                </div>
                <div className='w-full h-8 text-center'>
                    {errors.identifiant && <span className=' text-red-600' >This field is required</span>}
                </div>
                <br />
                <div className='w-full text-center text-slate-500 '>
                    <label htmlFor="">Entrez votre mot de password</label>
                </div>
                <div className='w-full'>
                    <input
                        type="password"
                        className={`bg-[#fdfdfde3] w-full border-2 border-slate-400 rounded-lg h-10  px-4 ${errors.password && ' border-red-600'} `}
                        {...register("password", { required: true })}
                    />
                </div>
                <div className='w-full flex justify-center my-8'>
                    <button type="submit" className='bg-green-900 w-full h-10 rounded-lg text-center py-2 text-white shadow-sm'> Se connecter </button>
                </div>
            </form>

        </div>
    )
}

export default Login

