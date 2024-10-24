import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ITOTService } from 'app/services/itot.service';
import { ItotPc } from 'app/models/ItotPc'; // Ensure this model has asset_barcode defined
import { ItotPeripheral } from 'app/models/ItotPeripheral'; // Import your ItotPeripheral model
import { CardService } from 'app/services/card.service';
import { Observable } from 'rxjs'; // Don't forget to import Observable

@Component({
    selector: 'app-modal-create-user-add',
    templateUrl: './modal-create-user-add.component.html',
    styleUrls: ['./modal-create-user-add.component.scss'],
})
export class ModalCreateUserAddComponent implements OnInit {
    isLinear = false;
    horizontalStepperForm: FormGroup;

    fruits: ItotPeripheral[] = [];
    filteredFruits: ItotPeripheral[] = [];
    selectedPeris: ItotPeripheral[] = [];
    currentFruit = ''; // For input binding

    pcs: ItotPc[] = [];
    filteredPcs: ItotPc[] = [];
    selectedPcs: ItotPc[] = [];
    currentPc = '';

    // Separator key codes for chip input
    separatorKeysCodes: number[] = [ENTER, COMMA];

    constructor(
        private _formBuilder: FormBuilder,
        private itotService: ITOTService,
        private cardService: CardService 
    ) {}

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
                assign_peripherals: ['', Validators.required],
            }),
        });

        // Fetch and initialize the barcode data
        this.loadBarcodes();
    }

    loadBarcodes() {
        // Get ITOT Barcodes for PCs
        this.itotService.getItots().subscribe(
            (barcodes: ItotPc[]) => {
                this.pcs = barcodes.filter((pc) => pc.asset_barcode != null);
                this.filteredPcs = [...this.pcs];
            },
            (error) => {
                console.error('Error fetching ITOT barcodes:', error);
            }
        );
     
        this.itotService.getItotPeripherals().subscribe(
            (barcodes: ItotPeripheral[]) => {
                this.fruits = barcodes.filter(
                    (peripherals) => peripherals.asset_barcode != null
                );
                this.filteredFruits = [...this.fruits];
            },
            (error) => {
                console.error('Error fetching ITOT barcodes:', error);
            }
        );
    }

    // add(event: any): void {
    //     const input = event.input;
    //     const value = event.value;
    
    //     // Check if the input value is not empty and the selected peripheral is not already included
    //     if ((value || '').trim()) {
    //         const newPeripheral = this.fruits.find(
    //             peripheral => peripheral.asset_barcode === value.trim()
    //         );
    
    //         // Ensure the peripheral exists and is not already selected
    //         if (newPeripheral && !this.selectedPeris.includes(newPeripheral)) {
    //             this.selectedPeris.push(newPeripheral); // Push the entire peripheral object
    //         }
    //     }
    
    //     if (input) {
    //         input.value = ''; // Clear the input field
    //     }
    
    //     this.currentFruit = ''; // Clear the currentFruit
    // }   
    
    add(event: any): void {
        const input = event.input;
        const value = event.value;
    
        // Check if the input value is not empty and the selected peripheral is not already included
        if ((value || '').trim()) {
            const newPeripheral = this.fruits.find(
                peripheral => peripheral.asset_barcode === value.trim()
            );
    
            // Ensure the peripheral exists and is not already selected
            if (newPeripheral && !this.selectedPeris.includes(newPeripheral)) {
                this.selectedPeris.push(newPeripheral); // Push the entire peripheral object
            }
        }
    
        if (input) {
            input.value = ''; // Clear the input field
        }
    
        this.currentFruit = ''; // Clear the currentFruit
    }
    remove(peripherals: ItotPeripheral): void {
        const index = this.selectedPeris.indexOf(peripherals);
        if (index >= 0) {
            this.selectedPeris.splice(index, 1); // Remove from selectedPeris
        }
    }
    
    selectedPeripherals(event: any): void {
        const selectedPeris = this.fruits.find(
            (peripheral) => peripheral.asset_barcode === event.option.value
        );
    
        if (selectedPeris && !this.selectedPeris.includes(selectedPeris)) {
            this.selectedPeris.push(selectedPeris); // Push the entire peripheral object
        }
    
        this.currentFruit = ''; // Clear the input field
    }
    
    filterFruits(value: string): void {
        const filterValue = value.toLowerCase();
        this.filteredFruits = this.fruits.filter((pc) =>
            pc.asset_barcode.toLowerCase().includes(filterValue)
        );
    }

    addPc(event: any): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.selectedPcs.push(value.trim());
        }

        if (input) {
            input.value = '';
        }

        this.currentPc = '';
    }

    selectedPc(event: any): void {
        const selectedPc = this.pcs.find(
            (pc) => pc.asset_barcode === event.option.value
        );

        if (selectedPc && !this.selectedPcs.includes(selectedPc)) {
            this.selectedPcs.push(selectedPc);
        }

        this.currentPc = ''; // Clear the input field
    }

    removePc(pc: ItotPc): void {
        const index = this.selectedPcs.indexOf(pc);
        if (index >= 0) {
            this.selectedPcs.splice(index, 1);
        }
    }

    filterPCs(value: string): void {
        const filterValue = value.toLowerCase();
        this.filteredPcs = this.pcs.filter((pc) =>
            pc.asset_barcode.toLowerCase().includes(filterValue)
        );
    }

    submitForm() {
        // Retrieve values from the form controls
        const step1 = this.horizontalStepperForm.get('step1')?.value;
        const step2 = this.horizontalStepperForm.get('step2')?.value;
        const selectedPcIds = this.selectedPcs.map(pc => pc.id);
        const selectedPeripheralIds = this.selectedPeris.map(peripheral => peripheral.id);
        const cardData = {
            step1: {
                contact_no: step1.contact_no,
                employee_id: step1.employee_id,
                firstname: step1.firstname,
                lastname: step1.lastname,
            },
            step2: {
                company: step2.company,
                date_assigned: step2.date_assigned,
                department: step2.department,
                location: step2.location,
            },
            step3: {
                assign_laptop: selectedPcIds,
                assign_peripherals: selectedPeripheralIds,
            },
            selectedPeripherals: this.selectedPeris,
            selectedPcs: this.selectedPcs,
        };
    
        // Log the cardData before sending it
        console.log('Submitted Card Data:', cardData);
    
        // Call the card service to create the card data and log the response
        this.cardService.CreateCardData(cardData).subscribe(
            (response) => {
                console.log('Card created successfully:', response);
            },
            (error) => {
                console.error('Error creating card:', error);
            }
        );
    }
}    