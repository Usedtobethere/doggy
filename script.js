Vue.component('modal', {
    //Propiedades pasadas del Root
    props: ['source'],
    //Declaración de estado del modal
    data(){
        return{
            showModal: false,
        }
    },
    //Método para negar el estado del modal
    methods:{
        toggleModal(){
            this.showModal = !this.showModal
        }
    },
    template: `
    <div>
    <!--Creación de la página principal, con un título, una imágen y un botón-->
    <h1>Haz click en el botón para acariciar al perrito</h1>
    <!--Imagen principal -->
      <div class="div">
        <img
          :src='source.img'
          :alt='source.alt'
          :height="source.height"
        />
        <button v-on:click="toggleModal">Acariciar :D</button>
      </div>
      <!--Creación del modal, clase open para mostrar al presionar el botón y clase close para ocultarlo al presionar otro botón-->
      <div class="modal-mask" :class="showModal ? 'open':'close'">
        <div class="modal-wrapper">
          <div class="modal-container">
          <!--Se obtiene el título de los props pasados-->
            <h2>{{source.title}}</h2>
            <!--Imágen obtenida de los props-->
            <img
            :src='source.imgOpen'
            :alt='source.altOpen'
            :height='source.height'
            >
            <!--Slot generado para añadir un parrafo, indicado por el ejercicio-->
            <slot name = "paragraph"></slot>
            <footer>
              <!--Botón generado para cerrar el modal-->
              <button v-on:click="toggleModal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data(){
        return{
            src:{
                img: './images/doggo.png',
                imgOpen:'./images/doggy.png',
                alt: 'Perrito por acariciar',
                altOpen: 'Perrito acariciado',
                height:'200vh',
                title: 'Haz acariciado al perrito :D'
            }
        }
        
    }
  })