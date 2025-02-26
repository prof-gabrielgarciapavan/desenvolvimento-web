import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  const [errors, setErrors] = useState({
    email: ""
  });

  // Função para validar o e-mail
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validação do e-mail
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "E-mail inválido. Use um formato correto, como exemplo@dominio.com" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se há erros antes de enviar
    if (errors.email) {
      alert("Por favor, corrija os erros antes de enviar.");
      return;
    }

    console.log("Dados enviados:", formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="container mt-4">
      <h2>Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default FormComponent;
