import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login-guard';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { checkoutGuard } from './guards/checkout-guard';
import { VantagensComponent } from './components/vantagens/vantagens.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: '**', redirectTo: 'home' },
];
