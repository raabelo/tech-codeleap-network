import { flattenTranslations } from "@/utils/functions/flattenTranslations";
import { TranslationsType } from "./en";

const translationsFR: TranslationsType = {
    fluentSchool: {
        menu: {
            header: {
                services: "Services",
                about: "About",
                feedbacks: "Feedbacks",
                faq: "FAQ",
            },
            footer: {
                slogan: "Aprendizado sem limite geográfico!",
                copyright: "Fluent School. All rights reserved.",
            },
            contact: {
                message:
                    "Olá, vi seu site e me interessei pelas aulas. Gostaria de agendar aula anamnese :)",
            },
        },
        sections: {
            hero: {
                title: "Apprendre\n sans frontières",
                subtitle: "n'importe où vous soyez",
                heroButton: "Prendre un rendez-vous",
            },
            services: {
                title: "Nossos Serviços",
                notes: {
                    discount:
                        "* Desconto de 10% para pagamentos no PIX realizados até o dia 10 de cada mês.",
                    classes:
                        "** Valores referentes à aulas somente de Inglês ou Francês. Para aulas de ambos os idiomas simultaneamente, conferir a aba 'Plano Poliglota' com desconto exclusivo.",
                    polyglot: "** As turmas não ultrapassam o limite máximo de 6 alunos.",
                },
                tabs: {
                    classes: {
                        title: "Aulas de Idiomas",
                        description: "Aulas de Inglês, Frânces e Português para extrangeiros",
                        packages: {
                            group: {
                                title: "Turma",
                                students: "Entre 3 a 6 alunos",
                                mode: "12X DE",
                                descriptions: {
                                    line1: "2h de aula por semana com dias e horários pré definidos",
                                    line2: "Acesso a gravação das aulas em caso de falta como forma de reposição",
                                    line3: "Material didático incluso",
                                    line4: "Plano de estudo diário personalizado",
                                    line5: "Envio de atividades on-line complementares",
                                    line6: "Suporte por WhatsApp",
                                    line7: "Contrato anual",
                                },
                                cta: "Está procurando o melhor custo-benefício?",
                            },
                            duo: {
                                title: "Dupla",
                                students: "Somente 2 alunos",
                                mode: "PARCELAS DE",
                                descriptions: {
                                    line1: "2h de aula por semana com dias e horários pré definidos",
                                    line2: "Até 10 reposições ao vivo (notificando com 6h de antecedência)",
                                    line3: "Material didático incluso",
                                    line4: "Plano de estudo diário personalizado",
                                    line5: "Envio de atividades on-line complementares",
                                    line6: "Suporte por WhatsApp",
                                    line7: "Contrato semestral ou anual",
                                },
                                cta: "Quer estudar com algum amigo(a)?",
                            },
                            individual: {
                                title: "Individual",
                                students: "Aulas particulares",
                                mode: "PARCELAS DE",
                                descriptions: {
                                    line1: "Dias e horários mais flexíveis com aulas semanais de até 1h30",
                                    line2: "Até 15 reposições ao vivo (notificando com 6h de antecedência)",
                                    line3: "Material didático incluso",
                                    line4: "Plano de estudo diário personalizado",
                                    line5: "Envio de atividades on-line complementares",
                                    line6: "Suporte por WhatsApp",
                                    line7: "Contrato trimestral, semestral ou anual",
                                },
                                cta: "Aulas personalizadas ao seu objetivo",
                            },
                        },
                    },
                    polyglot: {
                        title: "Plano Poliglota",
                        description:
                            "O Plano Poliglota é ideal para quem deseja aprender Inglês e Francês simultaneamente.",
                        packages: {
                            pack1: {
                                label: " Aulas\n Individuais ",
                                students: "1 aluno",
                                discount: "10%",
                                cta: "Pra quê escolher entre inglês ou francês se você pode aprender os dois ao mesmo tempo?!",
                                descriptions: {
                                    line1: "2h por semana, 1h de aula para cada idioma em 2 dias diferentes",
                                    line2: "Até 15 reposições ao vivo (notificando com 6h de antecedência)",
                                    line3: "Material didático incluso das duas línguas",
                                    line4: "Plano de estudo diário personalizado",
                                    line5: "Envio de atividades on-line complementares",
                                    line6: "Suporte por WhatsApp",
                                    line7: "Contrato trimestral, semestral ou anual",
                                },
                                note: "* Desconto de 10% para pagamentos no PIX realizados até o dia 10 de cada mês.",
                                paymentMethod: "Parcelas",
                            },
                            pack2: {
                                label: " Aulas\n em Duplas ",
                                students: "2 alunos",
                                discount: "20%",
                                cta: "Quer estudar inglês e francês ao\nmesmo tempo com algum amigo?!",
                                descriptions: {
                                    line1: "2h por semana, 1h de aula para cada idioma em 2 dias diferentes",
                                    line2: "Até 10 reposições ao vivo (notificando com 6h de antecedência)",
                                    line3: "Material didático incluso das duas línguas",
                                    line4: "Plano de estudo diário personalizado",
                                    line5: "Envio de atividades on-line complementares",
                                    line6: "Suporte por WhatsApp",
                                    line7: "Contrato semestral ou anual",
                                },
                                note: "* Desconto de 20% para pagamentos no PIX realizados até o dia 10 de cada mês.",
                                paymentMethod: "Parcelas",
                            },
                            pack3: {
                                label: " Aulas\n em Turma ",
                                students: "De 3 a 6 alunos",
                                discount: "40%",
                                cta: "Aprenda Inglês e francês com o melhor\ncusto-benefício",
                                descriptions: {
                                    line1: "Turmas entre 3 e 6 alunos",
                                    line2: "2h por semana, 1h de aula para cada idioma em 2 dias diferentes",
                                    line3: "Reposição através da gravação das aulas",
                                    line4: "Material didático incluso das duas línguas",
                                    line5: "Plano de estudo diário personalizado",
                                    line6: "Envio de atividades on-line complementares",
                                    line7: "Suporte por WhatsApp",
                                    line8: "Contrato anual",
                                },
                                note: "* Desconto de 40% para pagamentos no PIX realizados até o dia 10 de cada mês.",
                                paymentMethod: "12x",
                            },
                        },
                    },
                    mentoring: {
                        title: "Consultoria de Viagens",
                        description: {
                            line1: "Evite perrengues desnecessários durante sua viagem internacional e tenha a melhor experiência! Entre ter que comprar passagem, tirar visto, arrumar mala e checar documentação da imigração, nem sempre a gente sabe por onde começar e isso é normal. Seja para tirar férias, fazer um intercâmbio ou um mochilão, ter alguém com experiência em viagens internacionais para conversar, te mostrando o passo a passo do que precisa ser feito e tirando suas dúvidas faz muuuita diferença, né?",
                            line3: "Confira abaixo o que fazemos para te poupar tempo:",
                        },
                        services: {
                            schedule: {
                                title: "Itinerário de Viagens",
                                description:
                                    "Você nos conta para onde quer ir, quanto tempo deseja ficar e a gente prepara o roteiro perfeito para você com base nos seus gostos pessoais. Contendo horários de funcionamento de pontos turísticos, sugestões de passeios culturais e gastronômicos e links oficiais para a compra de passagens e ingressos. ",
                            },
                            planning: {
                                title: "Planejamento Estratégico",
                                description:
                                    "Para quem sabe para onde quer ir, mas ainda precisa se organizar financeiramente. Quem falha em se planejar, planeja em falhar. Aqui você recebe uma planilha financeira confeccionada a partir da sua realidade, com gestão clara de gastos e objetivos realistas para você guardar dinheiro e tirar seu sonho do papel. ",
                            },
                        },
                        button: {
                            text: {
                                line1: "Entre em contato por ",
                                line2: " para receber um orçamento personalizado!",
                                link: "aqui",
                            },
                            message:
                                "Olá, tenho interesse em adquirir sua consultoria de viagens. Gostaria de solicitar um orçamento personalizado :)",
                        },
                    },
                },
                common: {
                    from: "de",
                    to: "por",
                    seemore: "Saiba mais",
                    off: "OFF",
                    perperson: "por pessoa",
                },
            },
            about: {
                videoUrl: "https://www.youtube.com/embed/VziSLDjO2_g?autoplay=1",
                decoration: "Saiba mais sobre a Fluent School",
            },
            feedback: {
                title: "O que nossos alunos dizem",
                subtitle: "",
                feedbacks: {
                    student1: {
                        name: "Isabeli Nassar",
                        front: {
                            course: `Ex-aluna do curso\n"Conversação em Inglês &\nPhrasal Verbs"`,
                        },
                        back: {
                            course: `Ex-aluna do curso\n"Conversação em Inglês & Phrasal Verbs"`,
                            testimonial:
                                "Amei o curso e acho a metodologia ótima! A conversação me ajudou muito e os diferentes meios de aprendizagem como jogos e dicas de filmes também. O material é ótimo e o curso de Phrasal Verbs me ajudou muito com a familiarização com a língua e o jeitos dos nativos falarem. Não foi apenas um curso de inglês, mas também uma forma de adquirir conhecimentos em diversas áreas.",
                            location: "Buenos Aires, Argentina",
                        },
                    },
                    student2: {
                        name: "Matheus Carbogim",
                        front: {
                            course: `Ex-aluno do curso\n"Inglês Nível Avançado"`,
                        },
                        back: {
                            course: `Ex-aluno do curso "Inglês Nível Avançado"`,
                            testimonial:
                                "Por 4 meses, fiz as aulas individuais do curso avançado de Inglês com a Gabs e foi incrível. Ela adaptou as aulas a minha rotina e ao contexto técnico em que eu estava inserido profissionalmente. Ela leva tudo com um profissionalismo impecável.  Consegui desenvolver meu inglês com confiança e rapidamente consegui retorno profissional com isso. Em 2026 pretendo continuar as aulas para melhorar ainda mais as minhas habilidades na lingua inglesa. Recomendo a todos, sem ressalvas e exceções.",
                            location: "Ouro Preto - MG, Brasil",
                        },
                    },
                    student3: {
                        name: "Fabiano Rabelo",
                        front: {
                            course: `Aluno do curso\n"Francês Básico"`,
                        },
                        back: {
                            course: `Aluno do curso "Francês Básico"`,
                            testimonial:
                                "Acompanho o trabalho da Gabs como professora de inglês há cerca de um ano e sempre me impressionou muito a didática e o cuidado que ela tem com os materiáis. Agora participando do curso de francês, consigo ver de dentro o quão eficiente são os preparos das aulas.",
                            location: "Vitória - ES, Brasil",
                        },
                    },
                    student4: {
                        name: "Kemelly Andrade",
                        front: {
                            course: `Ex-aluna do curso\n"Inglês Básico ao Avançado"`,
                        },
                        back: {
                            course: `Aluno do curso "Francês Básico"`,
                            testimonial:
                                "Comecei o curso de inglês sem muito empenho, apenas para passar o tempo, e hoje percebo o quão importante essa decisão foi para minha vida profissional. O inglês me abriu portas, me deu confiança e fez diferença no meu crescimento. Recomendo que todos estudem inglês, porque é algo que pode mudar sua vida. As aulas da Gabs são um diferencial: o processo de aprendizagem é leve, descontraído e envolvente, fazendo você se sentir confortável e motivado a continuar aprendendo.",
                            location: "Cachoeiro - ES, Brasil",
                        },
                    },
                },
                common: {
                    gender: {
                        male: "M",
                        female: "F",
                    },
                },
            },
            faq: {
                title: "Frequently Asked Questions",
                subtitle: {
                    line1: "Ficou com dúvidas? A gente te ajuda!",
                    line2: "           Aqui está tudo o que você precisa saber antes de se juntar à Fluent School.",
                },
                questions: {
                    q1: {
                        question: "Como funcionam as aulas?",
                        answer: "As aulas na Fluent School são 100% online e ao vivo, com uma abordagem comunicativa para você se expor ao idioma e praticar as habilidades de escuta, leitura, escrita e principalmente a FALA, em todas as aulas. Não é um curso com aulas gravadas. São aulas interativas para você conversar e tirar suas dúvidas com a professora em tempo real sempre com câmera ligada e microfone de uso obrigatório.",
                    },
                    q2: {
                        question: "Como eu posso acessar a aula?",
                        answer: "Usamos a plataforma do Google Meets e compartilhamos o link de acesso por email. A recomendação é de usar um computador para visualizar mais facilmente os documentos e atividades compartilhados em aula, porém os alunos podem se conectar também como por tablet ou celular. Neste último caso, só é importante se certificar de fazer o download do aplicativo do Google Meets previamente.",
                    },
                    q3: {
                        question: "O curso tem material didático?",
                        answer: 'Sim, combinamos o uso de apostilas com atividades online complementares e o valor de todo esse material didático usado já está incluso no valor do curso. As apostilas que usamos são compartilhadas em PDF com nossos alunos e elas servem como "esqueleto" do curso, onde os alunos encontram os conteúdos que irão aprender em cada módulo. Além disso, usamos algumas atividades online complementares, sempre enviadas para os alunos durante a aula.',
                    },
                    q4: {
                        question: "Como funciona o envio do material didático?",
                        answer: "Para alunos no exterior, o envio das apostilas em PDF é feito por email, uma vez que efetuada a matrícula. Já para alunos no Brasil, além do compartilhamentos dos arquivos digitais, oferemos o envio da apostila física impressa.",
                    },
                    q5: {
                        question: "A Fluent School emite certificado?",
                        answer: "Sim e nossos certificados são emitidos ao final de cada nível concluído de acordo com o Quadro Europeu Comum de Referência para Línguas (CEFR), um padrão internacionalmente reconhecido para descrever a proficiência em um idioma.",
                    },
                    q6: {
                        question: "Quais são as formas de pagamento?",
                        answer: "No Brasil, aceitamos PIX, boleto e cartão de crédito. Para pagamentos internacionais, também é possível pagar pelo IBAN.",
                    },
                    q7: {
                        question: "Vocês emitem Nota Fiscal?",
                        answer: "Sim, emitimos Nota Fiscal mediante solicitação.",
                    },
                    q8: {
                        question: "O que é uma aula anamnese?",
                        answer: "É o nosso primeiro contato com o aluno para nos conhecer melhor. Durante a aula anamnese realizamos nosso Teste de Nivelamento, para assim encaminhar o aluno para o módulo do curso que melhor irá atender suas demandas individuais. Apresentamos o material didático do curso e o aluno tem a experiência de entender na prática como funcionam nossas aulas e a didática da professora. A aula anamnese custa R$50,00. Caso o aluno decida efetuar a matricula posteriormente, esse valor é descontado da primeira parcela do curso. Ou seja, sai gratuito para futuros alunos!",
                    },
                    q9: {
                        question: "Quantos módulos há no curso?",
                        answer: "O curso do Básico ao Avançado possui 6 módulos com tempo médio de 6 meses para cada, a depender da evolução do aluno. Para cursos mais específicos como Conversação, Business, preparação para provas de procifiência (ex.: TOEFL), entrar em contato por WhatsApp para mais informações.",
                    },
                },
            },
        },
        commons: {},
        cookies: {
            title: "Use of cookies:",
            consentText:
                "Cookies are small data files that are sent from a website's server to your web browser, from where they are stored on your device, and are used to keep track of your preferences on the site.",
            consentOptions: {
                all: {
                    label: "All cookies",
                    description:
                        "All cookies are used to enhance your experience by enabling the website's core functionalities, analyzing usage, personalizing content, and supporting marketing and performance improvements.",
                },
                essentials: {
                    label: "Only essential cookies",
                    description:
                        "Essential cookies are used solely to enable the transmission of data required for the website and its core functionalities, ensuring the site operates properly.",
                },
                none: {
                    label: "No cookies",
                    description:
                        "No cookies are used, except those that are strictly necessary for the basic operation of the website, without collecting analytics, personalization, or marketing data.",
                },
            },
        },
    },
};

export const TRANSLATIONS_FR = flattenTranslations(translationsFR);
