package openHelper;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class SQLite_OpenHelper extends SQLiteOpenHelper {
    public SQLite_OpenHelper(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    /**
     * @param sqLiteDatabase
     */
    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        String query = "create table usuarios(_ID integer primary key autoincrement, Cedula text, Nombre text, Apellido1 text, " +
                "Apellido2 text, Edad text, fechaNacimiento text, peso text, IMC text, Direccion text, correo text, password text)";

        sqLiteDatabase.execSQL(query);
    }

    /**
     * @param sqLiteDatabase
     * @param i
     * @param i1
     */
    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }

    /** Abrir base de datos */
    public void abrir(){
        this.getWritableDatabase();
    }
    /** Cerrar base de datos */
    public void cerrar(){
        this.close();
    }

    /**  Insertar registros en tabla usuarios */
    public  void insertarRegistro(String Cedula, String Nombre, String Apellido1, String Apellido2, String Edad,
                                  String fechaNacimiento, String peso, String IMC, String Direccion,
                                  String correo, String password) {
        ContentValues valores = new ContentValues();
        valores.put("Cedula", Cedula);
        valores.put("Nombre", Nombre);
        valores.put("Apellido1", Apellido1);
        valores.put("Apellido2", Apellido2);
        valores.put("Edad", Edad);
        valores.put("fechaNacimiento", fechaNacimiento);
        valores.put("peso", peso);
        valores.put("IMC", IMC);
        valores.put("Direccion", Direccion);
        valores.put("correo", correo);
        valores.put("password", password);
        this.getWritableDatabase().insert("usuarios", null, valores);
    }

    /** Validar si usuario existe */
    public Cursor ConsultarUsuario(String usuario, String password) throws SQLException {
        Cursor mcursor=null;
        mcursor=this.getReadableDatabase().query("usuarios",new String[]{"_ID", "Cedula",
                "Nombre", "Apellido1", "Apellido2", "Edad", "fechaNacimiento", "peso", "IMC",
                "Direccion", "correo", "password"}, "correo like '"+usuario+"' and password like '"+password+"'"
                ,null,null,null,null);
        return mcursor;
    }
}
