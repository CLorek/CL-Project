import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsAppbarComponent } from './appbar.component';

describe('LabsAppbarComponent', () => {
  let component: LabsAppbarComponent;
  let fixture: ComponentFixture<LabsAppbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsAppbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
