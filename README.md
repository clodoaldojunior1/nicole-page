# Nicole Cílios - Website & Dashboard

![Logo Preview](https://images.unsplash.com/photo-1583001809272-19ef69efd4a4?auto=format&fit=crop&q=80&w=1200)

Um projeto moderno desenvolvido para a **Nicole Cílios**, focado em oferecer uma experiência premium para clientes (Landing Page) e uma gestão eficiente para a profissional (Dashboard).

## 🚀 Tecnologias

Este projeto utiliza o que há de mais moderno no ecossistema Web:

- **Next.js 16 (Turbopack)**: Framework React para produção com alta performance.
- **React 19**: Versão estável mais recente do React.
- **Material UI (MUI) 9**: System Design robusto e elegante para a interface.
- **Supabase**: Backend-as-a-Service para autenticação e banco de dados.
- **Axios**: Cliente HTTP para consumo de APIs.
- **Vertical Slicing Architecture**: Organização de arquivos por funcionalidades (features) para escalabilidade.

## 📁 Estrutura do Projeto

O projeto segue a arquitetura de **Vertical Slicing**, separando responsabilidades por domínio:

```text
src/
├── app/                  # Roteamento (App Router)
├── features/             # Fatias de domínio
│   ├── landing-page/     # Tudo relacionado à página inicial
│   └── dashboard/        # Funcionalidades administrativas
├── shared/               # Recursos compartilhados
│   ├── components/       # Componentes genéricos (Header, Button, etc.)
│   ├── context/          # Provedores de estado global (Theme, Auth)
│   └── utils/            # Helpers e configurações (Supabase client)
└── public/               # Ativos estáticos e Mocks
```

## 🛠️ Configuração e Instalação

### Pré-requisitos
- Node.js instalado
- Yarn ou NPM

### Instalação
1. Clone o repositório
2. Instale as dependências:
   ```bash
   yarn install
   ```
3. Configure as variáveis de ambiente no `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=seu_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave
   ```

### Desenvolvimento
Inicie o servidor de desenvolvimento:
```bash
yarn dev
```

## 🧪 Dados Mockados (Prática de Axios)

Para facilitar o desenvolvimento do Dashboard e o treino com **Axios**, o projeto conta com endpoints locais (estáticos) em:
- `/mocks/services.json`
- `/mocks/professionals.json`

## 📄 Licença

Este projeto é de uso privado para Nicole Cílios.
