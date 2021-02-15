import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClasificacionPage } from './clasificacion.page';

describe('ClasificacionPage', () => {
  let component: ClasificacionPage;
  let fixture: ComponentFixture<ClasificacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClasificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
