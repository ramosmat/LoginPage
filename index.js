window.onload = () => {
    //pegando os dois templates
    const notificationTemplateForget = document.querySelector('#dialog-forget');
    const notificationTemplateLogin = document.querySelector('#dialog-login');

    //pegando os botoes
    const notificationButtonForget = document.querySelector('#button-forget');
    const notificationButtonLogin = document.querySelector('#button-login');

    //pegando a section que será inserida os dialogs
    const notificationSection = document.querySelector('#notification-section');

    const notificationSound = new Audio('/sounds/notification.wav')

    //criando envento que fica aguardando o click
    notificationButtonForget.addEventListener("click", () => {
        //clonando o que estiver no templateForget
        const newNotificationForget = notificationTemplateForget.content.cloneNode(true);

        //Id que será dado à notificação que será exibida
        const notificationIdForget = `notification-${Date.now()}`;

        //Variável que será o que está dentro da newNotificationForget
        const dialogForget = newNotificationForget.querySelector("dialog");

        //Passando o ID para a nova notificação
        dialogForget.id = notificationIdForget;

        //
        dialogForget.addEventListener("close", (ev) => {
            setTimeout(() => {
                ev.target.remove();
            }, 700)
        })

        notificationSection.appendChild(newNotificationForget)
        notificationSound.play()

        setTimeout(() => {
            const dialogForgetToClose = document.getElementById(notificationIdForget)
            if (dialogForgetToClose) {
                dialogForgetToClose.close()
            }
        }, 4000)
    })

    //criando envento que fica aguardando o click
    notificationButtonLogin.addEventListener("click", () => {
        //clonando o que estiver no templateForget
        const newNotificationLogin = notificationTemplateLogin.content.cloneNode(true);

        //Id que será dado à notificação que será exibida
        const notificationIdLogin = `notification-${Date.now()}`;

        //Variável que será o que está dentro da newNotificationForget
        const dialogLogin = newNotificationLogin.querySelector("dialog");

        //Passando o ID para a nova notificação
        dialogLogin.id = notificationIdLogin;

        //
        dialogLogin.addEventListener("close", (ev) => {
            setTimeout(() => {
                ev.target.remove();
            }, 700)
        })

        notificationSection.appendChild(newNotificationLogin)
        notificationSound.play()

        setTimeout(() => {
            const dialogLoginToClose = document.getElementById(notificationIdLogin)
            if (dialogLoginToClose) {
                dialogLoginToClose.close()
            }
        }, 4000)
    })
}