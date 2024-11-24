export const gender = {
    man: 'самец',
    woman: 'самка',
    undefinedGender: 'не определён'
}

export const breed = {
    adler: 'Адлер',
    adlerAmber: 'Адлерская янтарная',
    donaldsons: 'Дональдсона',
    golden: 'Золотистая',
    kamloops: 'Камлоопс',
    rosstal: "Россталь",
    roquefort: 'Рокфор',
    steelheadSalmon: 'Стальноголовый лосось'
}

export const statusFish = {
    elite:	'элита',	
    reserve: 'резерв',	
    GradeOwn: '1 сорт',	
    commodity: 'товарная'

}

export const products = [
    {
        ID: 'RUS 045 012 2024 105895',  
        gender: gender.man , // pol
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105892',  
        gender: gender.woman , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105891',  
        gender: gender.man , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    //
    {
        ID: 'RUS 045 012 2024 105895',  
        gender: gender.undefinedGender , // pol
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105892',  
        gender: gender.man , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105891',  
        gender: gender.man , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },{
        ID: 'RUS 045 012 2024 105895',  
        gender: gender.man , // pol
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105892',  
        gender: gender.man , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105891',  
        gender: gender.man , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },{
        ID: 'RUS 045 012 2024 105895',  
        gender: gender.man , // pol
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105892',  
        gender: gender.man , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    {
        ID: 'RUS 045 012 2024 105891',  
        gender: gender.man , // Родословная
        father: 'RUS 045 012 2024 105894', // Отец
        mother: 'RUS 045 012 2024 105893', // Мать

        fatherFather: 'RUS 045 012 2024 105892', // Отец Отца
        motherFather: 'RUS 045 012 2024 105892', // мать Отеца
        motherMother: 'RUS 045 012 2024 105891', // Мать Мать
        fatherMother: 'RUS 045 012 2024 105891', // Отец Мать

        weight: "1кг", // Вес в кг
        bodyLength: "30см", // Длина тела
        bodyHeight: '8см',//Высота тела
        bodyThickness: '8сь',          //Толщина тела
        heightOfTheCaudalStem: '12см',  //Высота хвостового стебля
        fultonFatnessСoefficient: '1.2',  //коэфициент упитанности по Фультону
        thicknessIndex: '1.2',//индекс толщины
        theHeightOrLengthIndex: '1.4',//индекс высоты или прогонистости

        breed: breed.donaldsons, // Порода
        status: statusFish.reserve, // Статус
        line: 'Да', // Линия
        birthDate: "01.01.2022", // Дата рождения
    },
    
    
];