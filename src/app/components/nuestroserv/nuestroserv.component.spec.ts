import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroservComponent } from './nuestroserv.component';

describe('NuestroservComponent', () => {
  let component: NuestroservComponent;
  let fixture: ComponentFixture<NuestroservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
