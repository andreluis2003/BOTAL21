const help = (prefix) => {
	return `

             🇧🇷 𝘽𝙊𝙏 𝘼𝙇 𝙅𝙈𝘽 🇧🇷

> *Sticker Commands* <
command : *${prefix}sticker* or *${prefix}stiker*
desc: converter imagem / gif / vídeo em adesivo
 uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc: converte imagem em adesivo enquanto remove o fundo
 uso: responder imagem ou enviar imagem com legenda\n
command : *${prefix}toimg*
desc: converter adesivo em imagem
 uso: adesivo de resposta\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc: converter texto em adesivo
usage : *${prefix}tsticker texto aqui*\n
> *Meme Commands* <
command : *${prefix}meme*
desc: imagens aleatórias de meme [inglês]
 uso: basta enviar o comando\n
command : *${prefix}memeindo*
desc: imagens meme aleatórias [indo]
 uso: basta enviar o comando\n
> *Others Commands* <
command : *${prefix}gtts*
desc: converter texto em fala / áudio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc: imagens aleatórias de loli
 uso: basta enviar o comando\n
command : *${prefix}nsfwloli*
desc: imagens aleatórias de nsfw loli
 uso: basta enviar o comando\n
command : *${prefix}url2img*
desc: faz capturas de tela da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc: sua mensagem será respondida por simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc: tira o texto da imagem
 uso: responder imagem ou enviar imagem com legenda\n
command : *${prefix}wait*
desc: pesquisar anime com imagem [What Anime Is This / That]
uso: responder imagem ou enviar imagem com legenda\n
command : *${prefix}setprefix*
desc: substituir prefixo
usage : *${prefix}setprefix [texto|optional]*\nexample : *${prefix}setprefix ?*
nota: este comando só pode ser usado pelo proprietário do bot\n
> *Group Comands* <
command : *${prefix}add*
desc: adicionar membro ao grupo
usage : *${prefix}add 55xxxxxxxx*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}kick*
desc: expulsar membros do grupo
usage : *${prefix}kick @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc: tornar o membro do grupo como administrador do grupo
usage : *${prefix}promote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}demote*
desc: tornar o administrador do grupo como membro do grupo
usage : *${prefix}demote @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}linkgroup*
desc: pegue o link do grupo
uso: basta enviar o comando
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}tagall*
desc: marca todos os membros do grupo, incluindo administradores também
uso: basta enviar o comando
nota: este comando pode ser usado se você for um administrador de grupo\n
command : *${prefix}simih*
desc: ativa o modo simi no grupo
usage : *${prefix}simih 1* para ativar simi mode and *${prefix}simih 0* para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo\n
_____________________________________________

𝗙𝗘𝗜𝗧𝗢 𝗣𝗢𝗥 : Wa.me//+558881098073

copyright ©®™
×××××××××××××××××××××××××××××××××××××××××××××
_____________________________________________`
}

exports.help = help
