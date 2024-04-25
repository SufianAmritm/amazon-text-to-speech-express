import { SynthesizeSpeechCommandOutput } from '@aws-sdk/client-polly';
import * as pollyService from '../aws/aws-polly'
import { POLLY_AUDIO } from './types/api.service.type';


  export async function createAudio(text: string): Promise<POLLY_AUDIO> {
    const voice: SynthesizeSpeechCommandOutput = await pollyService.createAudio(
      {
        OutputFormat: "mp3",
        Text: text,
        VoiceId: "Joanna",
        Engine: "neural",
        LanguageCode: "en-US",
        TextType: "text",
      }
    );

    const stream: Uint8Array = await voice.AudioStream.transformToByteArray();

    return {
      stream: stream,
      contentType: voice.ContentType,
    };
  }
