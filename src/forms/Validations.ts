import * as Yup from 'yup';

function configureValidations(){

    Yup.addMethod(Yup.string, 'firstLetterUppercase', function () {
        return this.test('first-letter-uppercase', 'A primeira letra deve ser maiúscula', function (value) {
            if (value && value.length >0){
                const firstLetter = value.substring(0,1);
                return firstLetter === firstLetter.toLocaleUpperCase();
            }
            return true;
        })
    })
}

export default configureValidations;