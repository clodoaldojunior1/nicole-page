import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline>{children}</CssBaseline>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
