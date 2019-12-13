import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@base-ui/react"
export default function LoginPage(){
    return (
        <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold">Entrar</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">Acesse o seu painel de gerenciamento ou crie sua conta!</p>  
            <form>
                <FieldGroup>
                    <Field>
                    <FieldLabel
                    htmlFor="email"
                    >
                        Email
                    </FieldLabel>
                    <Input id="email" type="email" placeholder="Digite seu email" 
                    autoCapitalize="username"
                    className="h-11"
                    required
                    />
                    </Field>
                    <Field>
                        <div className="flex items-center justify-between">
                            <FieldLabel>
                              Senha
                            </FieldLabel>
                            <a href="forgot-passowrd" className="text-xs font-medium text-primary hover:underline">Esqueceu a senha?</a>
                            
                        </div>
                        <Input id="password" type="password" className="h-11" placeholder="Digite a sua senha"/>
                    </Field>

                    <Button type="submit" className="mt-6 h-11 w-full ">
                        Entrando..
                    </Button>
                </FieldGroup>
            </form>          
        </div>
    )
}