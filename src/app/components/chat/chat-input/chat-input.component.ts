import {   Component, ChangeDetectionStrategy, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConfig, IUser } from 'src/assets/interfaces/shared.interface';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatInputComponent {
  @Output() onMessage = new EventEmitter<string>();
  private _selectedUser: IUser;
  public inputForm: FormGroup;
  nombreSeleccionado = "";

  @ViewChild("text", { static: true }) nameField: ElementRef;
  @Input() set selectedUser(selectedUser: IUser) {
    if (selectedUser) {
      this._selectedUser = selectedUser;
      // this.setFormInputValue(`@${selectedUser.name} `);
    }
  }

  get selectedUser() {
    return this._selectedUser;
  }

  @Input() config: IConfig = {
    placeholder: "Escribir mensaje",
    buttonLabel: "enviar"
  };



  // constructor(private fb: FormBuilder) {
  //   this.initForm();
  // }
  constructor() {
  }

  private initForm() {
    const name = this.selectedUser ? `@${this.selectedUser.name} ` : "";
    // this.inputForm = this.fb.group({
    //   text: [name, Validators.required]
    // });
  }

  private setFormInputValue(text: string) {
    if (this.inputForm) {
      this.inputForm.patchValue({
        text
      });
      this.nameField.nativeElement.focus();
    }
  }

  public onSubmit() {
    var nombre = this.nombreSeleccionado;
    this.nombreSeleccionado = '';
    console.log(nombre);
    this.onMessage.emit(nombre);
    // this.inputForm.reset();
  }


}
