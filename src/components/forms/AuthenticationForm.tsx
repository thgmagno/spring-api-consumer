'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'

export function AuthenticationForm() {
  const [mode, setMode] = useState<'login' | 'register'>('login')

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'login' ? 'register' : 'login'))
  }

  return (
    <>
      {mode === 'login' ? (
        <LoginForm toggleMode={toggleMode} />
      ) : (
        <RegisterForm toggleMode={toggleMode} />
      )}
    </>
  )
}

function HeaderForm() {
  return (
    <header className="mt-4 mb-8 flex flex-col items-center space-y-2.5">
      <div className="h-12 w-12 rounded-lg bg-neutral-800" />
      <h1 className="mb-4 text-2xl font-light">Bem-vindo!</h1>
    </header>
  )
}

function Divider() {
  return (
    <div className="mt-4 flex w-full items-center justify-center space-x-4">
      <div className="flex-1 border-t" />
      <span>ou</span>
      <div className="flex-1 border-t" />
    </div>
  )
}

function FormWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col space-y-3">{children}</div>
}

function LoginForm({ toggleMode }: { toggleMode: () => void }) {
  return (
    <form className="flex w-[92%] max-w-sm flex-col items-center rounded-4xl bg-neutral-900 p-6 shadow-lg sm:p-8">
      <HeaderForm />
      <FormWrapper>
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button>Entrar</Button>
        <Button variant="ghost">Esqueceu a senha?</Button>
        <Divider />
        <Button onClick={toggleMode} variant="link">
          Crie uma conta
        </Button>
      </FormWrapper>
    </form>
  )
}

function RegisterForm({ toggleMode }: { toggleMode: () => void }) {
  return (
    <form className="flex w-full max-w-sm flex-col items-center rounded-4xl bg-neutral-900 p-8 shadow-lg">
      <HeaderForm />
      <FormWrapper>
        <Input type="text" name="name" placeholder="Nome" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button>Criar conta</Button>
        <Divider />
        <Button onClick={toggleMode} variant="link">
          Entre com e-mail e senha
        </Button>
      </FormWrapper>
    </form>
  )
}
