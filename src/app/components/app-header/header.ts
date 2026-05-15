import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [UpperCasePipe, RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
    readonly brand = signal('PPW Angular 21');
    readonly showInfo = signal(false);
    readonly toggleLabel = computed(() => (this.showInfo() ? 'Ocultar info' : 'Mostrar info'));
    readonly topics = signal(['Signals', 'Control de flujo', 'Pipes', 'Binding']);
    toggleInfo(): void {
        this.showInfo.update((value) => !value);
    }

    changeBrand(): void {
        this.brand.update((b) => `${b}!`);
    }

    resetBrand(): void {
        this.brand.set('PPW Angular 21');
    }
}