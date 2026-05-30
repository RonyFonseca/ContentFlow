import {prisma} from "../lib/prisma.js";

class userController {
  async createUser(req: any, res: any) {
    const {name, email, password} = req.body; 

    if(!name || !email || !password) {
      return res.status(400).json({ error: "Falta informação!"});
    }

    if(email.includes("@") === false) {
      return res.status(400).json({ error: "Email inválido!"});
    }

    const isUper = email === email.toUpperCase();

    if(isUper){
      return res.status(400).json({ error: "Email deve conter letras minúsculas!"});
    }

    const names: Array<string> = name.split(" ");

    if(names.length > 1) {
      return res.status(400).json({ error: "O nome deve conter apenas o primeiro!"});
    }

    if(!(password.length+1 > 6 && password.length < 10)) {
      return res.status(400).json({ error: "A senha deve conter no mínimo 6 caracteres!"});
    }

    try {
      const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
      });
      return res.status(201).json("Usuário criado com sucesso!");
    } catch (error) {
      return res.status(500).json({ error: error});
    }
  }

  async deleteUser(req: any, res: any) {
    const {id} = req.params;

    //validação (id)
    if(!id) {
      return res.status(400).json({ error: "O ID do usuário é obrigatório!"});
    }

    try {
      const userExist = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });

      if(!userExist) {
        return res.status(404).json({ error: "Usuário não encontrado no banco de dados!"});
      }

      await prisma.user.delete({
        where: {
          id: id,
        },
      });

      return res.status(200).json("Usuário deletado com sucesso!");

    } catch (error) {
      return res.status(500).json({ error: "Erro interno ao deletar usuário!"});
    }}
}

export default userController;