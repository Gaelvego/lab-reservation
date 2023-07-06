import {useForm, Controller} from 'react-hook-form'
import { useState } from "react";
//import {useRef} from 'react';
import styles from './submitForm.module.css'
import Select from "react-select";
import Image from 'next/image'



export default function SubmitForm() {
    console.log("RERENDER")
    const [numAlumno, setNumAlumno] = useState({"alumno1" : true, "alumno2" : false, "alumno3" : false, "alumno4" : false, "alumno5" : false, "alumno6" : false});
    const [alumnoID, setAlumnoID] = useState(2);
    //const [inputs, setInputs] = useState(["Agregar Alumno"]); 
    const { register, handleSubmit, control } = useForm();
    //const ref = useRef(null);

    console.log(alumnoID)

    const onSubmit = data => console.log(data);

    const materiales = [
        {value:"materiales", label:"Escoge..."},
        { value: "Material-1", label: "Material 1" },
        { value: "Material-2", label: "Material 2" },
        { value: "Material-3", label: "Material 3" },
        { value: "Material-4", label: "Material 4" }
      ];

    const horas = [
        { value: "1-2", label: "1-2" },
        { value: "2-3", label: "2-3" },
        { value: "3-4", label: "3-4" },
        { value: "4-5", label: "4-5" }
    ];

    const pisos = [
        { value: "piso1", label: "Piso 1" },
        { value: "piso2", label: "Piso 2" },
        { value: "piso3", label: "Piso 3" },
        { value: "piso4", label: "Piso 4" }
    ];

    const salones = [
        { value: "1102", label: "Salon 1102" },
        { value: "1103", label: "Salon 1103" },
        { value: "1104", label: "Salon 1104" },
        { value: "2102", label: "Salon 2102" }
    ];


      /*
    const addStudentInput = (n) => {
        const newAlumno = numAlumno[n]? false : true;
    } */

    function addStudentInput () {
        setNumAlumno(prevNumAlumno => {
            return {
                ...prevNumAlumno,
                [`alumno${alumnoID}`] : true
            }
        });
        if (alumnoID <= 5){
            setAlumnoID(alumnoID+1);
        }  
    }


    return (
        <div className={styles.submitDiv}>
            <div className={styles.container}>
                <div className={styles.contactbox}>
                    <div className={styles.left}></div>
                    <div className={styles.right}>
                        <h2>Apartar Salón</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>              
                        
                        {Object.keys(numAlumno).map((key, index) => {
                            if (numAlumno[key]) {
                                return (
                                    <input
                                        type="text"
                                        name="alumnos"
                                        placeholder='Agregar Alumno'
                                        {...register(key)}
                                        autoFocus
                                        className={styles.field}
                                        key = {index}
                                        //onFocus={handleInputFocus}
                                        //ref={ref}
                                    />)
                                } 
                            })}
                            <button onClick={addStudentInput} type="button" className={styles.btn}>+</button>

                            <Select options={pisos} placeholder="Piso..." className={styles.select}/>

                            <Select options={salones} placeholder="Salón..." className={styles.select}/>

                            <Controller
                                name="materiales"
                                control={control}
                                //rules={{ required: true }}
                                placeholder='Selecciona...'
                                render={({ field }) => (
                                <Select {...field} isMulti options={materiales} placeholder="Materiales..." className={styles.selectMateriales}/>
                                )}
                            />

                            <input
                                type="date"
                                key = {2}
                                {...register("fecha")}
                                className={styles.field}
                                min={new Date().toISOString().split('T')[0]}
                            />

                            <Select options={horas} placeholder="Horario..." className={styles.select}/>
                            

                        <button onClick={handleSubmit} className={styles.btnRegistrar}>Registrar</button>
                        </form>

                </div>
            </div>
            </div>
        </div>
  )
}