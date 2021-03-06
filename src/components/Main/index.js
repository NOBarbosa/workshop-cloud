import './style.css';
import '../../App.css';
import { useState } from 'react'; 
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carrossel from '../Carrossel';


const steps = [
  {
    label: 'Tipos de computação em nuvem',
    description: `Há três maneiras diferentes de implantar serviços de nuvem: em uma nuvem pública, nuvem privada ou nuvem híbrida..`,
  },
  {
    label: 'Tipos de serviços de nuvem: IaaS, PaaS, sem servidor e SaaS',
    description:
      'A maioria dos serviços de computação em nuvem se enquadra em quatro categorias amplas: IaaS (infraestrutura como serviço), PaaS (plataforma como serviço), sem servidor e SaaS (software como serviço). Às vezes, eles são chamados de "pilha" de computação em nuvem, pois são criados uns sobre os outros. Saber o que eles são e como são diferentes ajuda a alcançar suas metas de negócios.',
  },
  {
    label: 'Usos da computação em nuvem',
    description: `Provavelmente você está usando computação em nuvem neste momento, mesmo sem perceber. Se você usa um serviço online para enviar email, editar documentos, ver filmes ou TV, ouvir música, jogar ou armazenar fotos e outros arquivos, é provável que a computação em nuvem esteja nos bastidores possibilitando tudo isso. Os primeiros serviços de computação em nuvem têm somente uma década, mas diversas organizações – de pequenas start-ups a corporações globais, de agências do governo a empresas sem fins lucrativos – estão adotando essa tecnologia por diversos motivos.`,
  },
];

function Main(){
    const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
    return(
     <main className='box'> 
      <div>
        <h2 id="intro" className='font-bold size-28'>Introdução</h2>
        <p className='font-regular size-14 mg-bot'>
          O que é computação em Nuvem? Qual a utilidade? Como se aplica? A computação em nuvem é o fornecimento de serviços de computação, incluindo servidores, armazenamento, bancos de dados, rede, software, análise e inteligência, pela Internet (“a nuvem”) para oferecer inovações mais rápidas, recursos flexíveis e economias de escala. O workshop sobre computação em nuvem promovido pelo Google developer students club surge para trazer uma breve introdução ao cloud computing. Logo abaixo é ilustrada a trilha de aprendizagem que seguiremos dentro do horário programado.
        </p>
      </div>
      <div className='box-center'>
        <div className='left'>
          <Box   sx={{ minWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === (steps.length - 1) ? (
                      <Typography color={'white'} variant="caption">último</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography  color={'black'} >{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Fim' : 'Próximo'}
                      </Button>
                      <Button
                        
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Voltar
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (          
              <Button 
              onClick={handleReset} 
              sx={{ mt: 1, mr: 1 }}
              variant="contained">
                Reset
              </Button>
          )}
        </Box>
      </div>
      <div className='rigth'>
          <Carrossel />
      </div>
      </div>

      <div>
        <h2 className='font-bold size-28'>Resumo</h2>
        <p className='font-regular  size-14'>
        Durante a execução do projeto em um primeiro momento exibimos os passos para servir nossa aplicação a partir de uma VM (máquina virtual). Entretanto, como foi possível observar, o processo foi bastante trabalhoso e exigiu uma série extensa de configurações e comandos.
        Pensando em uma forma mais prática de fazer o deploy da aplicação, resolvemos também utilizar uma VM porém, dessa vez com a imagem docker (mais próxima de um PaaS).
        </p>
      </div>
     </main>
    )
}

export default Main;