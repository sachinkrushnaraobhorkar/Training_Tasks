import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelidationComponent } from './velidation.component';

describe('VelidationComponent', () => {
  let component: VelidationComponent;
  let fixture: ComponentFixture<VelidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
