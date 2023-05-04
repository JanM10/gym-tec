package com.example.proyv2.Model;

public class Clases {
    public int id;
    public String tipo, fecha, periodoInicio, periodoFinal, instructor, cupo;

    public Clases(int id, String tipo, String fecha, String periodoInicio, String periodoFinal, String instructor, String cupo) {
        this.id = id;
        this.tipo = tipo;
        this.fecha = fecha;
        this.periodoInicio = periodoInicio;
        this.periodoFinal = periodoFinal;
        this.instructor = instructor;
        this.cupo = cupo;
    }

    public Clases() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getPeriodoInicio() {
        return periodoInicio;
    }

    public void setPeriodoInicio(String periodoInicio) {
        this.periodoInicio = periodoInicio;
    }

    public String getPeriodoFinal() {
        return periodoFinal;
    }

    public void setPeriodoFinal(String periodoFinal) {
        this.periodoFinal = periodoFinal;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public String getCupo() {
        return cupo;
    }

    public void setCupo(String cupo) {
        this.cupo = cupo;
    }
}
