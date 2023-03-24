import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from 'src/app/service/form-service.service';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent {
  succuss: boolean = false;
  isLoading: boolean = false;
  loading = this.loader.loading$
  public guestForm: FormGroup =new FormGroup({});;
  public Food = ['Steak (Halal)', 'Salmon', 'Vegetarian'];
  public validationMsgs = {
    'firstName': [{ type: 'name', message: 'Enter a name' }]
  }

  constructor(private formBuilder: FormBuilder, public formService: FormServiceService, private loader: LoadingService) { }

  ngOnInit() {
    this.guestForm = this.formBuilder.group({
      name: this.formBuilder.array([this.createGuestFormGroup()])
    });
  }

  public addguestFormGroup() {
    const name = this.guestForm.get('name') as FormArray
    name.push(this.createGuestFormGroup())
  }

  public removeOrClearEmail(i: number) {
    const name = this.guestForm.get('name') as FormArray
    if (name.length > 1) {
      name.removeAt(i)
    } else {
      name.reset()
    }
  }

  private createGuestFormGroup(): FormGroup {
    return new FormGroup({
      'firstName': new FormControl('', Validators.min(1)),
      'lastName': new FormControl('', Validators.required),
      'food': new FormControl('',Validators.required)
    })

  }

  getControls() {
    return (this.guestForm.get('name') as FormArray).controls;
  }

  addGuest(){
    this.isLoading = true
    this.formService.addGuest(this.guestForm.value.name).subscribe(res=>{
      this.isLoading = false
      this.succuss = true
    })
  }
}
