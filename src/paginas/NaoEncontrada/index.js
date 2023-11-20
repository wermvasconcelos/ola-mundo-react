import BotaoPrincipal from 'componentes/BotaoPrincipal'
import style from './NaoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>
                <h1 className={style.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={style.paragrafo}>
                    Tem certeza de qwue era isso que você estava procurando?
                </p>
                <p className={style.paragrafo}>
                    Aguarde uns instante e recarrega a página, ou volte para a página inicial.
                </p>

                <div 
                    className={style.botaoContainer}
                    onclick={() => navegar("/")}
                >
                    <BotaoPrincipal tamanho='lg'>
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img
                    className={style.imagemCachorro}
                    src={erro404}
                    alt='Cachorro de óculos e vestido de humano'
                />
            </div>

            <div className={style.espacoEmBranco}>
                
            </div>
        </>
    )
}