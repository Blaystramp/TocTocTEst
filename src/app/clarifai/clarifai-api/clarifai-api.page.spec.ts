import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClarifaiAPIPage } from './clarifai-api.page';

describe('ClarifaiAPIPage', () => {
  let component: ClarifaiAPIPage;
  let fixture: ComponentFixture<ClarifaiAPIPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarifaiAPIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClarifaiAPIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
