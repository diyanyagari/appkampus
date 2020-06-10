import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nama;
  nim;
  ps;
  matkul;
  notelp;
  biayaPS;
  biayaMatkul;
  username;
  password;

  constructor(private router: Router) { }

  token = '782f*&F&*y3fy78hHHY__f=-fs';
  enToggle = false;

  ngOnInit() {

  }

  onLogin() {
    if ((this.username == "admin") && (this.password == "1234")) {
      this.router.navigate(['/dashboard']);
      setTimeout(() => this.router.navigate(['/']), 20);
      sessionStorage.setItem("token", this.token);
      let username = "admin"
      sessionStorage.setItem("user.data", username);
    } else if ((this.username == "dosen") && (this.password == "1234")) {
      this.router.navigate(['/dashboard']);
      setTimeout(() => this.router.navigate(['/']), 20);
      sessionStorage.setItem("token", this.token);
      let username = "dosen"
      sessionStorage.setItem("user.data", username);
    } else {
      $.notify({
        icon: "pe-7s-info",
        message: "Login Gagal"
      }, {
        type: 'danger',
        timer: 200,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
    }
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
      let indexx;
      if (localStorage.getItem('dataform') != undefined) {
        indexx = JSON.parse(localStorage.getItem('dataform')).length + 1;
      } else {
        indexx = 1;
      }
      let datasimpan = [];
      let data = {
        id: indexx,
        nama: this.nama,
        nim: this.nim,
        ps: this.ps,
        matkul: this.matkul,
        notelp: this.notelp,
        biaya: this.biayaPS + this.biayaMatkul
      }
      datasimpan.push(data)
      if (localStorage.getItem('dataform')) {
        let temp = JSON.parse(localStorage.getItem('dataform'));
        temp.push(data);
        localStorage.setItem('dataform', JSON.stringify(temp))
      } else {
        localStorage.setItem('dataform', JSON.stringify(datasimpan))
      }
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
