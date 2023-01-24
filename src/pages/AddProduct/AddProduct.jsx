import React from 'react';
import {menuData} from "../../utils/menuData";
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useNavigate} from "react-router-dom";

const AddProduct = () => {

    const navigate = useNavigate()

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        mode: "onBlur"
    })

    const handleAddProduct = (data) => {
        const newProduct = {
            ...data,
            calories: data.protein * 4 + data.fats * 9 + data.carbohydrates * 4
        }

        axios.post('/products', newProduct)
            .then(() => {
                navigate('/')
                reset()
            } ).catch((err) => alert(err.message) )

    }

    return (
        <section className='addProduct'>
            <div className="container">
                <div className='addProduct__content'>
                    <form noValidate className='form' onSubmit={handleSubmit(handleAddProduct)}>
                        <h2 className='form__title'>Добавление продукта</h2>

                        <label className='form__label' >
                            <span className='form__label-title'>Название</span>
                            <input {...register('title', {
                                required: true
                            })} placeholder='Введите название' className='form__field' type="text"/>
                        </label>

                        <label className='form__label' >
                            <span className='form__label-title'>Картинка</span>
                            <input  {...register('image', {
                                required: true
                            })} placeholder='Введите ссылку ' className='form__field' type="text"/>
                        </label>


                        <label className='form__label' >
                            <span className='form__label-title'>Описание</span>
                            <input  {...register('description', {
                                required: true
                            })} placeholder='Введите описание' className='form__field' type="text"/>
                        </label>

                        <div className='form__block'>
                            <label className='form__label'>
                                <span className='form__label-title'>Цена</span>
                                <input  {...register('price', {
                                    required: true
                                })} defaultValue='0' className='form__field' type="number"/>
                            </label>

                            <label className='form__label' >
                                <span className='form__label-title'>Вес</span>
                                <input  {...register('weight', {
                                    required: true
                                })} defaultValue='0' className='form__field' type="number"/>
                            </label>
                        </div>

                        <div className="form__block">
                            <label className='form__label' >
                                <span className='form__label-title'>Белки</span>
                                <input  {...register('protein', {
                                    required: true
                                })} defaultValue='0' className='form__field' type="number"/>
                            </label>
                            <label className='form__label' >
                                <span className='form__label-title'>Жиры</span>
                                <input  {...register('fats', {
                                    required: true
                                })} defaultValue='0' className='form__field' type="number"/>
                            </label>
                            <label className='form__label' >
                                <span className='form__label-title'>Углеводы</span>
                                <input  {...register('carbohydrates', {
                                    required: true
                                })} defaultValue='0' className='form__field' type="number"/>
                            </label>
                        </div>


                        <label className='form__label'>
                            <span className='form__label-title'>Категория</span>
                            <select  {...register('category', {
                                required: true
                            })} className='form__select'>
                                <option disabled value="">Выберите категорию</option>
                                {
                                    menuData.map((item) => (
                                        <option key={item.en} value={item.en}>{item.ru}</option>
                                    ))
                                }
                            </select>
                        </label>

                        <button className='form__btn' type='submit'>Создать продукт</button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default AddProduct;