import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  editdata;
  nama;
  nim;
  ps;
  matkul;
  notelp;
  biayaPS;
  biayaMatkul;

  constructor(
    private fb: FirebaseService,
  ) { }
  datatable;
  role;

  ngOnInit() {
    this.datatable = JSON.parse(localStorage.getItem('dataform'));
    if (sessionStorage.getItem('user.data') == 'admin') {
      this.role = 1;
    } else if (sessionStorage.getItem('user.data') == 'dosen') {
      this.role = 2;
    }
  }

  onEdit(data){
    this.editdata = data;
    this.nama = data.nama;
    this.nim = data.nim;
    this.ps = data.ps;
    this.matkul = data.matkul;
    this.notelp = data.notelp;
  }

  simpanForm() {
    if ((this.nama != undefined) && (this.nim != undefined) && (this.ps != undefined) && (this.matkul != undefined) && (this.notelp != undefined)) {
      if (this.ps == 'Teknik Elektro') {
        this.biayaPS = 230000;
      } else if (this.ps == 'Teknik Telekomunikasi') {
        this.biayaPS = 530000;
      } else if (this.ps == 'Teknik Industri') {
        this.biayaPS = 260000;
      } else if (this.ps == 'Teknik Informatika') {
        this.biayaPS = 430000;
      }
      if (this.matkul == 'Kalkulus') {
        this.biayaMatkul = 560000;
      } else if (this.matkul == 'Fisika Dasar') {
        this.biayaMatkul = 450000;
      } else if (this.matkul == 'Fisika II') {
        this.biayaMatkul = 380000;
      } else if (this.matkul == 'Matematika Dasar') {
        this.biayaMatkul = 860000;
      }
      let datasimpan = [];
      let data = {
        id: this.editdata.id,
        nama: this.nama,
        nim: this.nim,
        ps: this.ps,
        matkul: this.matkul,
        notelp: this.notelp,
        biaya: this.biayaPS + this.biayaMatkul
      }

      let temp = JSON.parse(localStorage.getItem('dataform'));

      for (let i = 0; i < temp.length; i++) {
        if(temp[i].id == data.id) {
          datasimpan.push(data)
        } else {
          datasimpan.push(temp[i])
        }
      }
      console.log(datasimpan)
      localStorage.setItem('dataform', JSON.stringify(datasimpan))

      $.notify({
        icon: "pe-7s-attention",
        message: "Berhasil Menyimpan Data"
      }, {
        type: 'success',
        timer: 200,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
      this.nama = undefined;
      this.nim = undefined;
      this.ps = undefined;
      this.matkul = undefined;
      this.notelp = undefined;
      this.ngOnInit();
    } else {
      $.notify({
        icon: "pe-7s-info",
        message: "Harap Lengkapi Data"
      }, {
        type: 'warning',
        timer: 200,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
    }
  }
}
