import React from "react";
import "./App.css";
import { Button, Table } from "react-bootstrap";
import usd from "./img/usd.png";
import eur from "./img/eur.png";
import jpy from "./img/jpy.png";
import dkk from "./img/dkk.png";
import nok from "./img/nok.png";
import gbp from "./img/gbp.png";
import API from "./service/api";

function App() {
  const api = new API();
  api.getCurrencyAll().then((a) => {
    console.log(a);
  });
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 exchange-card">
            <img className="country-flag" src={usd} alt="usd" />
            <Table borderless hover size="sm">
              <thead>
                <tr>
                  <th>USD</th>
                  <th>Alış</th>
                  <th>Satış</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amerikan Doları</td>
                  <td>6,83</td>
                  <td>6,87</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-12 col-md-6 exchange-card">
            <img className="country-flag" src={eur} alt="eur" />
            <Table borderless hover size="sm">
              <thead>
                <tr>
                  <th>EUR</th>
                  <th>Alış</th>
                  <th>Satış</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Avrupa Para Birimi</td>
                  <td>6,83</td>
                  <td>6,87</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 exchange-card">
            <img className="country-flag" src={jpy} alt="jpy" />
            <Table borderless hover size="sm">
              <thead>
                <tr>
                  <th>JPY</th>
                  <th>Alış</th>
                  <th>Satış</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Japon Yeni</td>
                  <td>6,83</td>
                  <td>6,87</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-12 col-md-6 exchange-card">
            <img className="country-flag" src={gbp} alt="gbp" />
            <Table borderless hover size="sm">
              <thead>
                <tr>
                  <th>GBP</th>
                  <th>Alış</th>
                  <th>Satış</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>İngiliz Sterlini</td>
                  <td>6,83</td>
                  <td>6,87</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 exchange-card">
            <img className="country-flag" src={dkk} alt="dkk" />
            <Table borderless hover size="sm">
              <thead>
                <tr>
                  <th>DKK</th>
                  <th>Alış</th>
                  <th>Satış</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Danimarka Kronu</td>
                  <td>6,83</td>
                  <td>6,87</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-12 col-md-6 exchange-card">
            <img className="country-flag" src={nok} alt="nok" />
            <Table borderless hover size="sm">
              <thead>
                <tr>
                  <th>NOK</th>
                  <th>Alış</th>
                  <th>Satış</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Norveç Kronu</td>
                  <td>6,83</td>
                  <td>6,87</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 button-1">
            <Button variant="primary" size="lg" block>
              Detaylı Bilgi
            </Button>
          </div>
          <div className="col-12 col-md-6 button-2">
            <Button variant="outline-primary" size="lg" block>
              Tüm Piyasalar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
