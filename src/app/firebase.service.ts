import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath = '/mahasiswa';

  listMahasiswa: AngularFireList<any[]>;

  dataMahasiswa = null;

  constructor(
    private firestore: AngularFirestore,
    private db: AngularFireDatabase
  ) {
    this.dataMahasiswa = db.list(this.dbPath);
  }

  create(data) {
    this.dataMahasiswa.push(data);
  }

  get() {
    // this.listMahasiswa = this.db.list(this.dbPath);
    // return this.listMahasiswa;

    return this.db.list(this.dbPath).snapshotChanges();
  }
}
