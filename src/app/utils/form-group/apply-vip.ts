import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const ApplyVIPFormGroup: FormGroup = new FormBuilder().group({
  email: ['', [Validators.required]],
  name: ['', [Validators.required]],
  mobile_number: ['', [Validators.required]],
  referral_id: ['', [Validators.required]],
  company_name: ['', [Validators.required]],
  company_address: ['', [Validators.required]],
  company_contact_no: ['', [Validators.required]],
  business_category: ['', [Validators.required]],
  parcel_monthly: ['', [Validators.required, Validators.min(1)]],
  platform: ['', [Validators.required]],
  user_id: ['', [Validators.required]],
});
