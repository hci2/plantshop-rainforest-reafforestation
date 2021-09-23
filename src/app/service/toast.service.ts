import { Injectable } from '@angular/core';
import { ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  display() {
    this.toastr.info('Thank you for your donation for reafforestation!', 'Successfully donated!');
  }
}
