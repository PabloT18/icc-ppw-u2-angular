import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DatePipe, DecimalPipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [UpperCasePipe, TitleCasePipe, DatePipe, DecimalPipe, PercentPipe],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooterComponent {
    readonly projectName = signal('foooter');
    readonly instructor = signal('pablo torres');
    readonly lastUpdate = signal(new Date());
    readonly studentCount = signal(32);
    readonly progress = signal(0.65);
}
