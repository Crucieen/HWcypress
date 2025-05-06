describe('Форма логина и пароля',function () {
		it('1.Позитивный кейс авторизации',function () {
			cy.visit('https://login.qa.studio/');
			cy.get('#mail').type('german@dolnikov.ru');
			cy.get('#pass').type('iLoveqastudio1');
			cy.get('#loginButton').click();
			cy.get('#messageHeader').should('be.visible');
        	cy.get('#messageHeader').contains('Авторизация прошла успешно');
        	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('2.Проверка логики восстановления пароля',function () {
			cy.visit('https://login.qa.studio/');
			cy.get('#forgotEmailButton').click();
			cy.get('#mailForgot').type('mail@mail.kz');
			cy.get('#restoreEmailButton').click();
			cy.get('#messageHeader').should('be.visible');
			cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
			cy.get('#exitMessageButton > .exitIcon').should('be.visible');
		})

		it('3.Проверка на негативный кейс авторизации(Wrong password)',function () {
			cy.visit('https://login.qa.studio/');
			cy.get('#mail').type('german@dolnikov.ru');
			cy.get('#pass').type('german@dolnikov.ru');
			cy.get('#loginButton').click();
			cy.get('#messageHeader').should('be.visible');
        	cy.get('#messageHeader').contains('Такого логина или пароля нет');
        	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('4.Проверка на негативный кейс авторизации(Wrong login)',function () {
			cy.visit('https://login.qa.studio/');
			cy.get('#mail').type('iLoveqastudio1@dolnikov.ru');
			cy.get('#pass').type('iLoveqastudio1');
			cy.get('#loginButton').click();
			cy.get('#messageHeader').should('be.visible');
        	cy.get('#messageHeader').contains('Такого логина или пароля нет');
        	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

       it('5.Проверка на негативный кейс валидации:',function () {
			cy.visit('https://login.qa.studio/');
			cy.get('#mail').type('germandolnikov.ru');
			cy.get('#pass').type('iLoveqastudio1');
			cy.get('#loginButton').click();
			cy.get('#messageHeader').should('be.visible');
        	cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

       it('6.Проверка на приведение к строчным буквам в логине',function () {
			cy.visit('https://login.qa.studio/');
			cy.get('#mail').type('GerMan@Dolnikov.ru');
			cy.get('#pass').type('iLoveqastudio1');
			cy.get('#loginButton').click();
			cy.get('#messageHeader').should('be.visible');
        	cy.get('#messageHeader').contains('Авторизация прошла успешно');
        	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})