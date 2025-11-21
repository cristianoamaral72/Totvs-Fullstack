import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(
    private router: Router
  ) {}

  async onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    // try {
    //   console.log('[Login] Autenticando no Supabase...');
    //   await this.supabaseService.signIn(this.email, this.password);

    //   console.log('[Login] Autenticando na API de trading...');
    //   const tradingResponse = await this.tradingApiService.login(this.email, this.password);

    //   console.log('[Login] Resposta da API:', tradingResponse);

    //   if (tradingResponse.code === 'success') {
    //     console.log('[Login] ✓ Login bem-sucedido! SSID:', tradingResponse.ssid);
    //     this.router.navigate(['/trading']);
    //   } else {
    //     console.error('[Login] ✗ Falha no login:', tradingResponse);
    //     this.errorMessage = 'Erro ao autenticar na plataforma de trading';
    //   }
    // } catch (error: any) {
    //   console.error('[Login] Erro durante login:', error);
    //   this.errorMessage = error.message || 'Erro ao fazer login';
    // } finally {
    //   this.loading = false;
    // }
  }
}
