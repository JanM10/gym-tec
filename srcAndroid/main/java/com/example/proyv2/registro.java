package com.example.proyv2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import openHelper.SQLite_OpenHelper;

public class registro extends AppCompatActivity {


    Button btnGuardarUsuario;
    EditText txtCedula, txtNombre, txtApellido1, txtApellido2, txtEdad, txtFechaNacimiento, txtPeso, txtIMC,
            txtDireccion, txtCorreo, txtPassword;

    SQLite_OpenHelper helper = new SQLite_OpenHelper(this, "BD_MOVIL", null, 1);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registro);

        btnGuardarUsuario=(Button)findViewById(R.id.btnDoRegistro);
        txtCedula=(EditText)findViewById(R.id.txtRCedula);
        txtNombre=(EditText)findViewById(R.id.txtRNombre);
        txtApellido1=(EditText)findViewById(R.id.txtRApellido1);
        txtApellido2=(EditText)findViewById(R.id.txtRApellido2);
        txtEdad=(EditText)findViewById(R.id.txtREdad);
        txtFechaNacimiento=(EditText)findViewById(R.id.txtRFechaNacimiento);
        txtPeso=(EditText)findViewById(R.id.txtRPeso);
        txtIMC=(EditText)findViewById(R.id.txtRIMC);
        txtDireccion=(EditText)findViewById(R.id.txtRDireccion);
        txtCorreo=(EditText)findViewById(R.id.txtRCorreo);
        txtPassword=(EditText)findViewById(R.id.txtRPassword);

        btnGuardarUsuario.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                helper.abrir();
                helper.insertarRegistro(String.valueOf(txtCedula.getText()),
                        String.valueOf(txtNombre.getText()),String.valueOf(txtApellido1.getText()),
                        String.valueOf(txtApellido2.getText()),String.valueOf(txtEdad.getText()),
                        String.valueOf(txtFechaNacimiento.getText()),String.valueOf(txtPeso.getText()),
                        String.valueOf(txtIMC.getText()),String.valueOf(txtDireccion.getText()),
                        String.valueOf(txtCorreo.getText()), String.valueOf(txtPassword.getText()));
                helper.cerrar();

                Toast.makeText(getApplicationContext(), "¡Su cuenta ha sido creada con éxito!", Toast.LENGTH_SHORT).show();
                Intent i = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(i);
            }
        });

    }
}