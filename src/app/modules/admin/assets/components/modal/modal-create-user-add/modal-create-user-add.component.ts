import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-modal-create-user-add',
    templateUrl: './modal-create-user-add.component.html',
    styleUrls: ['./modal-create-user-add.component.scss'],
})
export class ModalCreateUserAddComponent implements OnInit {
    isLinear = false;
    horizontalStepperForm: FormGroup;

    fruits: string[] = ['Apple', 'Banana', 'Orange']; // Example list of fruits
    filteredFruits: string[] = []; // To store filtered fruits for autocomplete
    currentFruit = ''; // For input binding



    pcs: string[] = ['00001', '00002'];
    filteredPcs: string[] = [];
    separatorKeysCodes: number[] = [ENTER, COMMA]; // Separators for adding new fruits
    currentPc = ''; // For input binding


    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                firstname: ['', [Validators.required]],
                lastname: ['', Validators.required],
                employee_id: ['', Validators.required],
                contact_no: ['', Validators.required],
            }),
            step2: this._formBuilder.group({
                department: ['', Validators.required],
                company: ['', Validators.required],
                location: ['', Validators.required],
                date_assigned: ['', Validators.required],
            }),
            step3: this._formBuilder.group({
                assign_pc: ['', Validators.required],
                assign_laptop: ['', Validators.required],
            }),
        });

        // Initialize the filtered arrays
        this.filteredFruits = [...this.fruits];
        this.filteredPcs = [...this.pcs]; // Initialize with all PCs
    }

      // Fruit-related methods
      add(event: any): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.fruits.push(value.trim());
        }

        if (input) {
            input.value = '';
        }

        this.currentFruit = '';
    }

    remove(fruit: string): void {
        const index = this.fruits.indexOf(fruit);

        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }

    selected(event: any): void {
        const fruit = event.option.value;

        if (!this.fruits.includes(fruit)) {
            this.fruits.push(fruit);
        }

        this.currentFruit = '';
    }

    filterFruits(value: string): void {
        const filterValue = value.toLowerCase();
        this.filteredFruits = this.fruits.filter((fruit) =>
            fruit.toLowerCase().includes(filterValue)
        );
    }

    // PC-related methods
    addPc(event: any): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.pcs.push(value.trim());
        }

        if (input) {
            input.value = '';
        }

        this.currentPc = '';
    }

    removePc(pc: string): void {
        const index = this.pcs.indexOf(pc);

        if (index >= 0) {
            this.pcs.splice(index, 1);
        }
    }

    selectedPc(event: any): void {
        const pc = event.option.value;

        if (!this.pcs.includes(pc)) {
            this.pcs.push(pc);
        }

        this.currentPc = '';
    }

    filterPCs(value: string): void {
        const filterValue = value.toLowerCase();
        this.filteredPcs = this.pcs.filter((pc) =>
            pc.toLowerCase().includes(filterValue)
        );
    }
}