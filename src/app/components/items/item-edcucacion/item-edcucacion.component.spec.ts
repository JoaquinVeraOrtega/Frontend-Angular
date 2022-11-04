import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEdcucacionComponent } from './item-edcucacion.component';

describe('ItemEdcucacionComponent', () => {
  let component: ItemEdcucacionComponent;
  let fixture: ComponentFixture<ItemEdcucacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEdcucacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemEdcucacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
