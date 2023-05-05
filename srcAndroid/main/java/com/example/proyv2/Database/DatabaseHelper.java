package com.example.proyv2.Database;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DatabaseHelper extends SQLiteOpenHelper {
    private static final String DB_NAME="Clases.db";
    private static final String DB_TABLE="Clases_Table";

    private static final String ID="ID";
    private static final String TIPO="TIPO";
    private static final String FECHA="FECHA";
    private static final String PERIODOINICIO="PERIODOINICIO";
    private static final String PERIODOFINAL="PERIODOFINAL";
    private static final String INSTRUCTOR="INSTRUCTOR";
    private static final String CUPO="CUPO";

    private static final String CREATE_TABLE = "CREATE TABLE "+ DB_TABLE+" ("+ID+" INTEGER PRIMARY KEY AUTOINCREMENT, "+ TIPO+ " TEXT, "+FECHA+" TEXT, "+PERIODOINICIO+" TEXT, "+
            PERIODOFINAL+" TEXT, "+INSTRUCTOR+" TEXT, "+CUPO+" TEXT "+")";


    public DatabaseHelper(Context context){
        super(context, DB_NAME, null, 1);
    }

    /**
     * @param sqLiteDatabase
     */
    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL(CREATE_TABLE);
    }

    /**
     * @param sqLiteDatabase
     * @param i
     * @param i1
     */
    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {
        sqLiteDatabase.execSQL("DROP TABLE IF EXISTS "+DB_TABLE);

        onCreate(sqLiteDatabase);
    }

    public boolean insertData(String tipo, String fecha, String inicio, String pfinal, String instructor, String cupo){
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put(TIPO,tipo);
        contentValues.put(FECHA,fecha);
        contentValues.put(PERIODOINICIO,inicio);
        contentValues.put(PERIODOFINAL,pfinal);
        contentValues.put(INSTRUCTOR,instructor);
        contentValues.put(CUPO,cupo);

        long result = db.insert(DB_TABLE, null, contentValues);
        return result!=-1;
    }

    public Cursor viewData(){
        SQLiteDatabase db = this.getReadableDatabase();
        String query = "Select * from "+DB_TABLE;
        Cursor cursor = db.rawQuery(query, null);

        return cursor;

    }
}
