import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-file-chooser-library',
  template: `
    <p>
      file-chooser-library works!
    </p>
  `,
  styles: [
    `.type-thumb {
      font-size: 10px;
      padding-left: 5px;
      padding-right: 5px;
      line-height: 16px
    }

    .single-container {
      padding: 0.5rem 1rem 0.4rem 1rem;
      position: relative;
    //border: dashed 1px #979797;
      border-top: dashed 1px #979797;
      border-left: dashed 1px #979797;
      border-right: dashed 1px #979797;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      cursor: pointer;
      margin: 0 auto;

      &:hover {
        background: rgba(151, 151, 151, 0.07);
      }

      input {
        opacity: 0;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }


      h3 {
        font-size: 20px;
        font-weight: 600;
        color: #38424c;
      }
    }

    .fileover {
      animation: shake 1s;
      animation-iteration-count: infinite;
    // @apply bg-primary-50;
    }

    .drag-drop-bottom-file {
      border-bottom: dashed 2px #979797;
    }

    .drag-drop-bottom-no-file {
      border-bottom: dashed 1px #979797;
    }

    .size-info {
      font-size: 10px !important;
      line-height: 15px;
      padding: 0 15px;
    }

    .files-list {
      max-height: 147px;
      overflow-y: auto;

      .single-file {
        display: flex;
        padding: 0 0.5rem 0 0.3rem;
        justify-content: space-between;
        align-items: center;
        border-right: dashed 1px #979797;
        border-left: dashed 1px #979797;
        column-gap: 0.5rem;
        border-bottom: dashed 1px #979797;

        .name {
          font-size: 13px;
          margin: 0;
          line-height: 10px;
          padding-top: 10px;
        }

        .size {
          font-size: 12px;
          font-weight: 500;
          color: #a4a4a4;
          margin: 0;
          margin-bottom: 0.25rem;
        }

        .info {
          width: 100%
        }
      }


      .no-file {
        display: flex;
        justify-content: center;
        align-items: center;
        border: dashed 1px #979797;
        column-gap: 0.5rem;
        border-radius: 6px;
        flex-grow: 1;

        .no-name {
          font-size: 13px;
          margin: 0;
          @apply text-red-500;
        }
      }
    }

    .invalid-file {
      padding: 1px;
      border: 1px solid #dc2626;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    .no-file-selected {
      background: rgba(220, 38, 38, 0.02);
    }


    .require-attachment::after {
      margin-left: 1px;
      margin-right: 0;
      content: "*";
    }

    .disable-attachment {
      background: rgb(0 0 0 / 4%);
      cursor: not-allowed;
    }

    /* Shake animation */
    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }

      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }

      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }

      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }

      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }

      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }

      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }

      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }

      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }

      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }

      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }`]
})
export class FileChooserLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
