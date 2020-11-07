import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: 'kt-delete-modal',
	templateUrl: './delete-modal.component.html',
	styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DeleteModalComponent>,
		@Inject(MAT_DIALOG_DATA)
		public data: any
	) {
	}

	ngOnInit() {
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
