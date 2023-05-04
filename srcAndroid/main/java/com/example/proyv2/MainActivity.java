package com.example.proyv2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import openHelper.SQLite_OpenHelper;

public class MainActivity extends AppCompatActivity {

    TextView tvRegistrese;
    Button btnIngresar;

    SQLite_OpenHelper helper= new SQLite_OpenHelper(this, "BD_MOVIL", null, 1);
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tvRegistrese=(TextView)findViewById(R.id.tvRegistro);

        tvRegistrese.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getApplicationContext(), addClasses.class);
                startActivity(i);
            }
        });

        btnIngresar=(Button)findViewById(R.id.btnInicioSesion);
        btnIngresar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                EditText txtUsuario=(EditText)findViewById(R.id.txtLUsuario);
                EditText txtPassword=(EditText)findViewById(R.id.txtLPassword);

                Cursor cursor=helper.ConsultarUsuario(txtUsuario.getText().toString(),
                        txtPassword.getText().toString());
                if(cursor.getCount()>0){
                    Intent i = new Intent(getApplicationContext(), registro.class);
                    startActivity(i);
                } else {
                    Toast.makeText(getApplicationContext(), "Usuario o contraseña incorrectos",
                            Toast.LENGTH_SHORT).show();
                }
                txtUsuario.setText("");
                txtPassword.setText("");
                txtUsuario.findFocus();
            }
        });
    }
}