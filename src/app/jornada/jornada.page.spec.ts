import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JornadaPage } from './jornada.page';

describe('JornadaPage', () => {
  let component: JornadaPage;
  let fixture: ComponentFixture<JornadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JornadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
