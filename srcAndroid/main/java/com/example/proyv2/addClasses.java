package com.example.proyv2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.MenuItemCompat;
import androidx.appcompat.widget.SearchView;

import android.database.Cursor;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;


import com.example.proyv2.Database.DatabaseHelper;

import java.util.ArrayList;
import java.util.Locale;

public class addClasses extends AppCompatActivity {

    DatabaseHelper db;
    Button add_data;
    EditText add_tipo, add_fecha, add_inicio, add_final, add_instructor, add_cupo;

    ListView classlist;
    ArrayList<String> listItem;
    ArrayAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_classes);

        db = new DatabaseHelper(this);

        listItem = new ArrayList<>();

        add_data = findViewById(R.id.add_data);
        add_tipo = findViewById(R.id.add_tipo);
        add_fecha = findViewById(R.id.add_fecha);
        add_inicio = findViewById(R.id.add_inicio);
        add_final = findViewById(R.id.add_final);
        add_instructor = findViewById(R.id.add_instructor);
        add_cupo = findViewById(R.id.add_cupo);
        classlist = findViewById(R.id.classes_list);

        viewData();

        classlist.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                String text = classlist.getItemAtPosition(i).toString();
                Toast.makeText(addClasses.this, ""+text, Toast.LENGTH_SHORT).show();

            }
        });

        add_data.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String tipo = add_tipo.getText().toString();
                String fecha = add_fecha.getText().toString();
                String inicio = add_inicio.getText().toString();
                String pfinal = add_final.getText().toString();
                String instructor = add_instructor.getText().toString();
                String cupo = add_cupo.getText().toString();
                if (!tipo.equals("") && db.insertData(tipo, fecha, inicio, pfinal, instructor, cupo)){
                    Toast.makeText(addClasses.this, "Se añadió", Toast.LENGTH_SHORT).show();
                    add_tipo.setText("");
                    add_fecha.setText("");
                    add_inicio.setText("");
                    add_final.setText("");
                    add_instructor.setText("");
                    add_cupo.setText("");
                    listItem.clear();
                    viewData();
                } else {
                    Toast.makeText(addClasses.this, "No se añadió", Toast.LENGTH_SHORT).show();
                }
            }
        });

    }

    private void viewData() {
        Cursor cursor = db.viewData();

        if(cursor.getCount()==0){
            Toast.makeText(this, "No hay data", Toast.LENGTH_SHORT).show();
        }else{
            while(cursor.moveToNext()){
                listItem.add(cursor.getString(1));
                //listItem.add(cursor.getString(2));//1 Es tipo, 0 es ID
                //String item = cursor.getString(1) + " " + cursor.getString(2) + " " + cursor.getString(3);
                //listItem.add(item);
            }

            adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, listItem);
            classlist.setAdapter(adapter);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu,menu);

        MenuItem searchItem = menu.findItem(R.id.item_search);
        SearchView searchView = (SearchView) MenuItemCompat.getActionView(searchItem);

        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String s) {
                return false;
            }

            @Override
            public boolean onQueryTextChange(String s) {
                ArrayList<String> classeslist = new ArrayList<>();

                for (String user : listItem) {
                    if (user.toLowerCase().contains(s.toLowerCase())) {
                        classeslist.add(user);
                    }
                }

                ArrayAdapter<String> adapter = new ArrayAdapter<String>(addClasses.this,
                        android.R.layout.simple_list_item_1,classeslist);
                classlist.setAdapter(adapter);
                return true;
            }

        });
        return super.onCreateOptionsMenu(menu);
    }
}