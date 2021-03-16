using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = new Evento[]
            {
                new Evento(){
                    EventoId = 1,
                    Tema = "Angular e .Net 5",
                    Local = "BH",
                    Lote = "1º Lote",
                    QtdPessoas = 250,
                    ImagemURL = "foto.png",
                    DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
                },
                new Evento(){
                    EventoId = 2,
                    Tema = "Angular e .Net Core",
                    Local = "BH",
                    Lote = "2º Lote",
                    QtdPessoas = 250,
                    ImagemURL = "foto2.png",
                    DataEvento = DateTime.Now.AddDays(4).ToString("dd/MM/yyyy")
                }
            };
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public EventoController()
        {

        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return this._evento;
        }

        [HttpGet("{id}")]
        public Evento GetById(int id)
        {
            return _evento.Where(e => e.EventoId == id).FirstOrDefault();
        }

        [HttpPost]
        public string Post()
        {
            return "exemplo post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"exemplo put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Deleter(int id)
        {
            return $"exemplo delete com id = {id}";
        }
    }
}
