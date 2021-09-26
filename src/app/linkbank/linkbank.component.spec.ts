import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkbankComponent } from './linkbank.component';

describe('LinkbankComponent', () => {
  let component: LinkbankComponent;
  let fixture: ComponentFixture<LinkbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
