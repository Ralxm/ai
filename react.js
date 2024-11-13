let contact = [];

function MakeHeaderHappen(){
    return React.createElement("div",{className:'header-nav'}, 
        React.createElement("div", {className:'left-header-nav'}, //LEFT HEADER NAV
            React.createElement("a", {className:'back-button', href:"index.html"}, "Voltar")
        ),
        React.createElement("div", {className:'center-header-nav'}, //CENTER HEADER NAV
            React.createElement("a", null, "Contacte-nos")
        ),
        React.createElement("div", {className:'right-header-nav'}, '')
    )
}

function MakeBodyHappen(){
    return React.createElement("fieldset", {className:'formulario'}, 
        React.createElement("form", {className:'formulario-form'},
            React.createElement("label", {className:'formulario-label'},
                React.createElement("a", null, "Nome:"),
                React.createElement("input", {className:'formulario-input', id:'nome', pattern:'([a-zA-z ])+'}),
                React.createElement("br", null)
            ),
            React.createElement("label", {className:'formulario-label'},
                React.createElement("a", null, "Email:"),
                React.createElement("input", {className:'formulario-input', id:'email', pattern:'^[a-zA-z0-9._ ]+[@][a-zA-z0-9. ]+'}),
                React.createElement("br", null)
            ),
            React.createElement("label", {className:'formulario-label'},
                React.createElement("a", null, "Motivo:"),
                React.createElement("input", {className:'formulario-input', id:'motivo'}),
                React.createElement("br", null)
            ),
            React.createElement("label", {className:'formulario-label'},
                React.createElement("a", null, "Nº Telemóvel:"),
                React.createElement("input", {className:'formulario-input', id:'telemovel', pattern:'^[9][1236][0-9]{7}'}),
                React.createElement("br", null)
            ),
            React.createElement("label", {className:'formulario-label mensagem'},
                React.createElement("a", null, "Mensagem:"),
                React.createElement("textarea", {className:'formulario-input-mensagem', id:'mensagem'}),
                React.createElement("br", null)
            ),
            React.createElement("div", {className:'botoes'},
                React.createElement("label", {className:'formulario-label'},
                    React.createElement("input", {className:'formulario-input-btn-enviar', onClick:Enviar, type:"button", value:"Enviar"}),
                    React.createElement("br", null)
                ),
                React.createElement("label", {className:'formulario-label'},
                    React.createElement("input", {className:'formulario-input-btn-limpar', onClick:Limpar, type:'button', value:'Limpar'}),
                    React.createElement("br", null)
                ),
            )
        )
    )
}

function body(){
    return React.createElement("div", {className:'test'}, MakeBodyHappen());
}

function Enviar(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let motivo = document.getElementById("motivo").value;
    let telemovel = document.getElementById("telemovel").value;
    let mensagem = document.getElementById("mensagem").value;
    contact = [nome, email, motivo, telemovel, mensagem];

    localStorage.setItem('contacto', JSON.stringify(contact));

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("motivo").value = "";
    document.getElementById("telemovel").value = "";
    document.getElementById("mensagem").value = "";

    alert("A sua mensagem foi enviada!");
}

function Limpar(){
    localStorage.removeItem('contacto');
}

ReactDOM.render(MakeHeaderHappen(), document.getElementById("page-header"));
ReactDOM.render(body(), document.getElementById("page-body"));