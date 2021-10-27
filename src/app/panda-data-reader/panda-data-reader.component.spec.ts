import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaDataReaderComponent } from './panda-data-reader.component';

describe('PandaDataReaderComponent', () => {
  let component: PandaDataReaderComponent;
  let fixture: ComponentFixture<PandaDataReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandaDataReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandaDataReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
